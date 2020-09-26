import * as fromLoadGame from '../reducers/load-game.reducer';
import { selectLoadGameState } from './load-game.selectors';

describe('LoadGame Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLoadGameState({
      [fromLoadGame.loadGameFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
