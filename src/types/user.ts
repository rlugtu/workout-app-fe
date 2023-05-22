export interface User {
    displayName: string;
    email?: string;
    height?: number;
    weight?: number;
    settings: UserSettings;
}

export interface UserSettings {
    weightMetric: WeightMetric;
    distanceMetric: DistanceMetric;
}

export type WeightMetric = 'pounds' | 'kilogram';

export type DistanceMetric = 'metric' | 'imperial';
