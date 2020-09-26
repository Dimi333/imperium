import * as fromNewGame from '../reducers/new-game.reducer';
import { selectNewGameState } from './new-game.selectors';

describe('NewGame Selectors', () => {
  it('should select the feature state', () => {
    const result = selectNewGameState({
      [fromNewGame.newGameFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
