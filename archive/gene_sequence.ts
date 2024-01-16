const sequence = ['A', 'A', 'G','G', 'E'];

const validGeneCode = (code: string): boolean => {
    switch (code) {
        case 'A':
        case 'E':
        case 'G':
        case 'T':
            return true;
        default:
            return false;

    }
}

let sequenceIsValid = false;
for(const code of sequence) {
    if (!validGeneCode(code)) {
        sequenceIsValid = false;
    } else {
        sequenceIsValid = true;
    }
    console.log(`${code}: ${sequenceIsValid}`);
}

console.log(`${sequence.toString()} is a valid gene encoding: ${sequenceIsValid}\n`);