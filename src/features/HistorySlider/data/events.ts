import { HistoryEvent } from "../types";

export const historyNames = ["Литература", "Кино", "Наука"] as const;

export const historyEvents: HistoryEvent[] = [
  {
    id: 1,
    year: 1980,
    description: "Sinclair Research выпускает домашний компьютер ZX80",
  },
  {
    id: 2,
    year: 2004,
    description:
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
  },
  {
    id: 4,
    year: 1999,
    description:
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
  },
  {
    id: 5,
    year: 2020,
    description:
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
  },
  {
    id: 6,
    year: 2022,
    description:
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
  },
  {
    id: 7,
    year: 1992,
    description:
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
  },
  {
    id: 8,
    year: 1997,
    description:
      "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
  },
  {
    id: 9,
    year: 2000,
    description:
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
  },
  {
    id: 10,
    year: 2005,
    description:
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
  },
  {
    id: 11,
    year: 2010,
    description:
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
  },
  {
    id: 12,
    year: 2015,
    description:
      "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
  },
  {
    id: 13,
    year: 2016,
    description:
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
  },
  {
    id: 14,
    year: 2018,
    description:
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
  },
  {
    id: 15,
    year: 2017,
    description:
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
  },
  {
    id: 15,
    year: 1987,
    description:
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
  },
] as const;

export const historyDates = [
  [1980, 1986],
  [1987, 1991],
  [1999, 2004],
  [2014, 2021],
  [2015, 2022],
  [2017, 2022],
];
