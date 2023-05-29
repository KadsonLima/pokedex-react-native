interface Ability {
    name: string;
    url: string;
  }
  
  interface GameIndex {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }
  
  interface VersionGroupDetails {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }
  
  interface Move {
    move: {
      name: string;
      url: string;
    };
    version_group_details: VersionGroupDetails[];
  }
  
  interface Form {
    name: string;
    url: string;
  }

  interface Type {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  
  
  export interface PokemonData {
    abilities: {
      ability: Ability;
      is_hidden: boolean;
      slot: number;
    }[];
    base_experience: number;
    forms: Form[];
    game_indices: GameIndex[];
    height: number;
    held_items: any[];
    name:string;
    id: number;
    is_default: boolean;
    sprites:{
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    location_area_encounters: string;
    moves: Move[];
    types:Type[];
  }