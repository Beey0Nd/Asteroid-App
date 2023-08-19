// data
export interface Asteroid {
    name: string
    estimated_diameter: {
        kilometers: {
            estimated_diameter_max: number
        }
    }
    id: AsteroidId
    is_potentially_hazardous_asteroid: boolean
    close_approach_data: [{
        close_approach_date_full: string
        miss_distance: {
            kilometers: string
            lunar: string
        }
    }]
}

export type AsteroidId = string

export type Data = {
    near_earth_objects: {
        [index: string]: Asteroid[]
    }
}

export interface ApproachData {
    name: string
    close_approach_data: Approach[]
}

export interface Approach {
    close_approach_date_full: string
    miss_distance: {
        kilometers: string
    }
    relative_velocity: {
        kilometers_per_hour: string
    }
    orbiting_body: string
}

export type Distance = "kilometers" | "lunar"

export type OrderedItem = {
    asteroidId: AsteroidId
    approachDate: string
}

// props
export interface DistanceButtonsProps {
    distance: Distance
    setDistance: React.Dispatch<React.SetStateAction<Distance>>
}

export interface AsteroidDataProps {
    data: Data
    setOrderedItems: React.Dispatch<React.SetStateAction<OrderedItem[]>>
}

export interface AsteroidListProps {
    data: Data
    distance: Distance
    setOrderedItems: React.Dispatch<React.SetStateAction<OrderedItem[]>>
}

export interface AsteroidListItemProps {
    asteroid: Asteroid
    distance: Distance
    setOrderedItems: React.Dispatch<React.SetStateAction<OrderedItem[]>>
}

export interface AsteroidListItemButtonProps extends OrderedItem {
    setOrderedItems: React.Dispatch<React.SetStateAction<OrderedItem[]>>
}

export interface MainPageProps {
    data: Data
}

export interface BasketProps {
    orderedItems: OrderedItem[]
}

export interface AsteroidPageButtonsProps {
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    data: ApproachData
}

export interface BasketPageProps {
    searchParams: {
        orderedItems: OrderedItem[]
    }
}

export type BasketListItemProps = OrderedItem