export interface Player {
	name: string;
	password: string;
}

export interface Settings {
	doNotLogout: boolean
}

export interface ImperiumStore {
	loggedIn: boolean;
	login: Player;
	settings: Settings;
}

export const playerFeatureKey = 'imperium';

export const initialState: ImperiumStore = {
	loggedIn: false,
	login: {
		name: "",
		password: ""
	},
	settings: {
		doNotLogout: false
	}
};
