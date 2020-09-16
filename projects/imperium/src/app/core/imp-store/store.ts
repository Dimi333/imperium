export interface Player {
	name: string;
	password: string;
}

export interface ImperiumStore {
	loggedIn: boolean;
	login: Player;
}
