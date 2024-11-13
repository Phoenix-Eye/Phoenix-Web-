interface Wildfires {
  country: string;
  states: State[];
}

interface State {
  name: string;
  wildfires: Wildfire[];
}

interface Wildfire {
  id: string;
  name: string;
  actualData: ActualData;
  weatherConditions: WeatherConditions;
  coordinates: [number, number];
}

interface ActualData {
  startTime: string;
  sheltering: string;
  liveMoist: string;
  elevDifference: string;
  aspect: string;
  size: string;
  fuel: string;
  slope: string;
  frp: string;
}

interface WeatherConditions {
  windDirection: string;
  windEyeLevel: string;
  airTemp: string;
  relHumidity: string;
  precipitation: string;
  shading: string;
  clouds: string;
  solarRadiation: string;
  heatIndex: string;
  brightness: string;
}

export const wildfiresDetails: Wildfires[] = [
  {
    country: "United States",
    states: [
      {
        name: "California",
        wildfires: [
          {
            id: "us_ca_1",
            name: "Paynes Creek Wildfire",
            coordinates: [-121.91876, 40.33392],
            actualData: {
              startTime: "06/10/23 09:00",
              sheltering: "Fully Sheltered",
              liveMoist: "Fully Cured",
              elevDifference: "Below 1000 ft",
              aspect: "North",
              size: "231.4 ac",
              fuel: "9 (TL)",
              slope: "62° (188%)",
              frp: "21.4",
            },
            weatherConditions: {
              windDirection: "200°",
              windEyeLevel: "10 mi/h",
              airTemp: "32°F",
              relHumidity: "10%",
              precipitation: "0",
              shading: "0-20%",
              clouds: "0",
              solarRadiation: "343.6",
              heatIndex: "15.6",
              brightness: "313.8",
            },
          },
        ],
      },
    ],
  },
  {
    country: "Mexico",
    states: [
      {
        name: "Sonora",
        wildfires: [
          {
            id: "mex_so_1",
            name: "Nogales Wildfire",
            coordinates: [-110.8968082457804, 31.26933620026809],
            actualData: {
              startTime: "07/29/24 9:00",
              sheltering: "Fully Sheltered",
              liveMoist: "Fully Cured",
              elevDifference: "Below 1000 ft",
              aspect: "North",
              size: "231.4 ac",
              fuel: "9 (TL)",
              slope: "62° (188%)",
              frp: "21.4",
            },
            weatherConditions: {
              windDirection: "200°",
              windEyeLevel: "10 mi/h",
              airTemp: "32°F",
              relHumidity: "10%",
              precipitation: "0",
              shading: "0-20%",
              clouds: "0",
              solarRadiation: "343.6",
              heatIndex: "15.6",
              brightness: "313.8",
            },
          },
          {
            id: "mex_so_2",
            name: "Hermosillo Blaze",
            coordinates: [-110.951234, 29.072967],
            actualData: {
              startTime: "08/03/24 12:30",
              sheltering: "Partially Sheltered",
              liveMoist: "Moderately Cured",
              elevDifference: "Above 1000 ft",
              aspect: "West",
              size: "560.7 ac",
              fuel: "10 (GS)",
              slope: "48° (113%)",
              frp: "32.8",
            },
            weatherConditions: {
              windDirection: "180°",
              windEyeLevel: "15 mi/h",
              airTemp: "36°F",
              relHumidity: "20%",
              precipitation: "0",
              shading: "20-40%",
              clouds: "10",
              solarRadiation: "450.7",
              heatIndex: "20.4",
              brightness: "280.9",
            },
          },
          {
            id: "mex_so_3",
            name: "Guaymas Hills Fire",
            coordinates: [-110.913456, 27.929322],
            actualData: {
              startTime: "08/10/24 08:15",
              sheltering: "Open",
              liveMoist: "Dry",
              elevDifference: "Below 500 ft",
              aspect: "South",
              size: "135.2 ac",
              fuel: "6 (GR)",
              slope: "30° (58%)",
              frp: "18.3",
            },
            weatherConditions: {
              windDirection: "220°",
              windEyeLevel: "8 mi/h",
              airTemp: "28°F",
              relHumidity: "15%",
              precipitation: "0",
              shading: "10-30%",
              clouds: "5",
              solarRadiation: "330.1",
              heatIndex: "12.9",
              brightness: "290.5",
            },
          },
          {
            id: "mex_so_4",
            name: "Caborca Desert Fire",
            coordinates: [-112.025678, 30.718745],
            actualData: {
              startTime: "08/14/24 16:45",
              sheltering: "Barely Sheltered",
              liveMoist: "Very Dry",
              elevDifference: "Flat",
              aspect: "East",
              size: "320.8 ac",
              fuel: "12 (SH)",
              slope: "10° (17%)",
              frp: "27.5",
            },
            weatherConditions: {
              windDirection: "170°",
              windEyeLevel: "12 mi/h",
              airTemp: "41°F",
              relHumidity: "5%",
              precipitation: "0",
              shading: "0%",
              clouds: "2",
              solarRadiation: "500.3",
              heatIndex: "33.2",
              brightness: "340.6",
            },
          },
          {
            id: "mex_so_5",
            name: "Sierra Madre Wildfire",
            coordinates: [-109.450987, 28.675231],
            actualData: {
              startTime: "08/18/24 14:00",
              sheltering: "Partially Sheltered",
              liveMoist: "Slightly Cured",
              elevDifference: "Above 1500 ft",
              aspect: "Southwest",
              size: "475.3 ac",
              fuel: "11 (CR)",
              slope: "50° (119%)",
              frp: "40.6",
            },
            weatherConditions: {
              windDirection: "250°",
              windEyeLevel: "20 mi/h",
              airTemp: "27°F",
              relHumidity: "30%",
              precipitation: "0",
              shading: "30-50%",
              clouds: "15",
              solarRadiation: "420.0",
              heatIndex: "19.5",
              brightness: "305.4",
            },
          },
        ],
      },
    ],
  },
];
