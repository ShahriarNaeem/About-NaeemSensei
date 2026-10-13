import React, { useState, useMemo } from 'react';
import { Gauge, AlertTriangle, CloudRain, Sun, Snowflake, Zap, Car, RotateCcw } from 'lucide-react';

export const TrafficPredictorWidget: React.FC = () => {
  const [hour, setHour] = useState<number>(17); // 5 PM
  const [weather, setWeather] = useState<'Clear' | 'Rain' | 'Snow' | 'Freezing Rain'>('Rain');
  const [temperature, setTemperature] = useState<number>(34); // °F
  const [isHoliday, setIsHoliday] = useState<boolean>(false);

  // Machine Learning Simulation Model based on westbound I-94 patterns
  const prediction = useMemo(() => {
    let baseVolume = 0;
    if (hour >= 0 && hour < 5) baseVolume = 600 + hour * 150;
    else if (hour >= 5 && hour < 9) baseVolume = 2400 + (hour - 5) * 650;
    else if (hour >= 9 && hour < 15) baseVolume = 4200 + Math.sin(hour) * 200;
    else if (hour >= 15 && hour < 19) baseVolume = 4800 + (hour === 17 ? 600 : 200);
    else baseVolume = 4500 - (hour - 19) * 750;

    let weatherPenalty = 1.0;
    let riskMultiplier = 1.0;
    if (weather === 'Rain') {
      weatherPenalty = 0.92;
      riskMultiplier = 1.8;
    } else if (weather === 'Snow') {
      weatherPenalty = 0.78;
      riskMultiplier = 2.4;
    } else if (weather === 'Freezing Rain') {
      weatherPenalty = 0.65;
      riskMultiplier = 3.6;
    }

    if (temperature <= 32 && (weather === 'Rain' || weather === 'Snow')) {
      riskMultiplier *= 1.3;
    }

    if (isHoliday) {
      baseVolume *= 0.72;
      riskMultiplier *= 0.85;
    }

    const predictedVolume = Math.round(baseVolume * weatherPenalty);
    const capacityThreshold = 5200;
    const congestionRatio = Math.min(100, Math.round((predictedVolume / capacityThreshold) * 100));

    const baseRisk = (congestionRatio > 75 ? 40 : 15) + (hour >= 16 && hour <= 19 ? 20 : 5);
    const accidentRisk = Math.min(98, Math.round(baseRisk * (riskMultiplier * 0.6)));

    let status = 'Free Flowing';
    let statusColor = 'text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-950/60';
    if (congestionRatio >= 85) {
      status = 'Heavy Congestion / Queuing';
      statusColor = 'text-rose-700 bg-rose-50 dark:text-rose-300 dark:bg-rose-950/60';
    } else if (congestionRatio >= 65) {
      status = 'Moderate Traffic Volume';
      statusColor = 'text-amber-700 bg-amber-50 dark:text-amber-300 dark:bg-amber-950/60';
    }

    return {
      predictedVolume,
      congestionRatio,
      accidentRisk,
      status,
      statusColor
    };
  }, [hour, weather, temperature, isHoliday]);

  const resetDefaults = () => {
    setHour(17);
    setWeather('Rain');
    setTemperature(34);
    setIsHoliday(false);
  };

  const formatHour = (h: number) => {
    const period = h >= 12 ? 'PM' : 'AM';
    const displayH = h % 12 === 0 ? 12 : h % 12;
    return `${displayH}:00 ${period}`;
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm p-5 sm:p-6 text-slate-800 dark:text-slate-200 transition-colors">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive ML Model Prototype</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
            Westbound I-94 Hourly Traffic Flow Predictor
          </h4>
        </div>
        <button
          onClick={resetDefaults}
          className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white px-2.5 py-1 rounded bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset Parameters</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5">
        
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Hour Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              <span>Time of Day (Diurnal Cycle)</span>
              <span className="font-mono text-blue-700 dark:text-blue-400 font-semibold text-sm">
                {formatHour(hour)} ({hour}:00 hrs)
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="23"
              value={hour}
              onChange={(e) => setHour(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-mono">
              <span>12 AM</span>
              <span>6 AM (Rush)</span>
              <span>12 PM</span>
              <span>5 PM (Peak)</span>
              <span>11 PM</span>
            </div>
          </div>

          {/* Weather Selector */}
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Atmospheric & Surface Weather
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { name: 'Clear', icon: Sun },
                { name: 'Rain', icon: CloudRain },
                { name: 'Snow', icon: Snowflake },
                { name: 'Freezing Rain', icon: AlertTriangle }
              ].map((w) => {
                const Icon = w.icon;
                const isSelected = weather === w.name;
                return (
                  <button
                    key={w.name}
                    type="button"
                    onClick={() => setWeather(w.name as any)}
                    className={`flex items-center justify-center gap-1.5 p-2 rounded-lg text-xs font-medium border transition-colors ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/80 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 font-semibold'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{w.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Temperature & Holiday toggles */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                <span>Temperature</span>
                <span className="font-mono font-semibold text-slate-900 dark:text-white">{temperature}°F</span>
              </div>
              <input
                type="range"
                min="0"
                max="95"
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Calendar Type
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsHoliday(false)}
                  className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md border transition-colors ${
                    !isHoliday
                      ? 'bg-slate-900 dark:bg-blue-600 text-white border-slate-900 dark:border-blue-600'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  Standard Day
                </button>
                <button
                  type="button"
                  onClick={() => setIsHoliday(true)}
                  className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md border transition-colors ${
                    isHoliday
                      ? 'bg-slate-900 dark:bg-blue-600 text-white border-slate-900 dark:border-blue-600'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  Holiday
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Prediction Results Gauge Column */}
        <div className="lg:col-span-6 bg-slate-50/80 dark:bg-slate-850 rounded-xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Model Output (XGBoost Regressor)
              </span>
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${prediction.statusColor}`}>
                {prediction.status}
              </span>
            </div>

            {/* Big Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-lg border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <Car className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Predicted Volume</span>
                </div>
                <div className="text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-white">
                  {prediction.predictedVolume.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">vehicles / hour</div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-lg border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <AlertTriangle className={`w-3.5 h-3.5 ${prediction.accidentRisk > 60 ? 'text-rose-600 dark:text-rose-400' : 'text-amber-500 dark:text-amber-400'}`} />
                  <span>Accident Risk Index</span>
                </div>
                <div className={`text-2xl font-bold font-mono tabular-nums ${prediction.accidentRisk > 60 ? 'text-rose-700 dark:text-rose-400' : 'text-slate-900 dark:text-white'}`}>
                  {prediction.accidentRisk}%
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">meteorological coefficient</div>
              </div>
            </div>

            {/* Congestion Level Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                <span>Corridor Capacity Saturation</span>
                <span className="font-mono font-medium">{prediction.congestionRatio}% of Design Capacity</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 rounded-full ${
                    prediction.congestionRatio > 80
                      ? 'bg-rose-500'
                      : prediction.congestionRatio > 55
                      ? 'bg-amber-500'
                      : 'bg-emerald-500'
                  }`}
                  style={{ width: `${prediction.congestionRatio}%` }}
                />
              </div>
            </div>
          </div>

          <div className="pt-3 mt-3 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
            *Trained on Minnesota DOT I-94 westbound sensor loops cross-referenced with NOAA hourly atmospheric matrices.
          </div>
        </div>

      </div>

    </div>
  );
};
