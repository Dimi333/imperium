import * as fromNewGame from './new-game.actions';

describe('loadNewGames', () => {
  it('should return an action', () => {
    expect(fromNewGame.loadNewGames().type).toBe('[NewGame] Load NewGames');
  });
});
