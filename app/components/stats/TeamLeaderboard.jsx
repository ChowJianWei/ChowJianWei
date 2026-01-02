export default function TeamLeaderboard({ teams = [] }) {
  return (
    <div>
      <h3>Team Leaderboard</h3>
      <ol>
        {teams.map((team) => (
          <li key={team.name}>
            {team.name} — {team.points}
          </li>
        ))}
      </ol>
    </div>
  );
}
