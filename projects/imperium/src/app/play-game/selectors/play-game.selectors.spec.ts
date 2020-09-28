import * as fromPlayGame from '../reducers/play-game.reducer';
import { selectPlayGameState } from './play-game.selectors';

describe('PlayGame Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPlayGameState({
      [fromPlayGame.playGameFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
