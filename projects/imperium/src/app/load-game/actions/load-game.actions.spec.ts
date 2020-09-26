import * as fromLoadGame from './load-game.actions';

describe('loadLoadGames', () => {
  it('should return an action', () => {
    expect(fromLoadGame.loadLoadGames().type).toBe('[LoadGame] Load LoadGames');
  });
});
