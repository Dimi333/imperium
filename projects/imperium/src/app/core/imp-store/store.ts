export interface Player {
	name: string;
	password: string;
}

export interface Settings {
	doNotLogout: boolean
}

export interface ImperiumStore {
	login: Player;
	settings: Settings;
}

export const playerFeatureKey = 'imperium';

export const initialState: ImperiumStore = {
	login: {
		name: "",
		password: "",
	},
	settings: {
		doNotLogout: false
	}
};
