import * as fromPlayGame from './play-game.actions';

describe('loadPlayGames', () => {
  it('should return an action', () => {
    expect(fromPlayGame.loadPlayGames().type).toBe('[PlayGame] Load PlayGames');
  });
});
