export interface Item {
	name: string,
	id: number,
	weight: number
}

export interface Inventory {
	[index: number]: Item
}

export interface Money {
	gold: number,
	silver: number,
	bronze: number
}

export interface Character {
	name: string
	position: string,
	inventory: Inventory,
	money: Money
}
