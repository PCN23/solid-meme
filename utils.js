export function renderStat(Number) {
    const li = document.createElement('li');
    li.textContent = `${Number.player} (${Number.points} Points)`;
    return li;
}

export function renderGame(game) {
    const li = document.createElement('li');
    li.textContent = `Game #${game.number} - ${game.totalPoints} Points Scored`;
    return li;
}
