let skills: string[] = ['Bash', 'Healing','Counter'];



interface Character {
    name:string;
    hp: number;
    skills: string[];
    hoemtown?: string;
}

const strinder: Character = {
    name: 'Strider',
    hp: 200,
    skills: ['Bash', 'Counter']
}

strinder.hoemtown = "Rivendell";

console.table(strinder);

export {}