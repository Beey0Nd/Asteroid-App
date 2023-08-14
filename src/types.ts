// data

export interface Asteroid {
    name: string;
    estimated_diameter: { 
        kilometers: {
            estimated_diameter_max: number 
        }
    };
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: [{
        close_approach_date_full: string,
        miss_distance: {
            kilometers: string,
            lunar: string
        }
    }];
}

export type Data = {
    near_earth_objects: {
        [index: string]: Asteroid[]
    }
}
export type Distance = "kilometers" | "lunar"

// props
export interface DistanceButtonsProps {
    setDistance: React.Dispatch<React.SetStateAction<Distance>>
}

export interface AsteroidDataProps {
    data: Data
}

export interface AsteroidListProps {
    data: Data
    distance: Distance
}
