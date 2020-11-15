import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let teamWins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        teamWins++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        teamWins++;
      }
    }

    return `Team '${this.team}', won ${teamWins} games`;
  }
}