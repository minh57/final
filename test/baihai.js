function alternatingSums(a) {
    let team1 = 0;
    let team2 = 0;
    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            team1 += a[i];
        } else {
            team2 += a[i];
        }
    }
    console.log([team1, team2]);;
}
let a = [60, 40, 55, 75, 64]
alternatingSums(a)