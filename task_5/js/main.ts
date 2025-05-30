// Interface pour les crédits majeurs avec une propriété de marque unique
interface MajorCredits {
    credits: number;
    // Propriété de marque pour identifier uniquement MajorCredits
    __brand: "MajorCredits";
}

// Interface pour les crédits mineurs avec une propriété de marque unique
interface MinorCredits {
    credits: number;
    // Propriété de marque pour identifier uniquement MinorCredits
    __brand: "MinorCredits";
}

// Fonction pour additionner les crédits majeurs
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: "MajorCredits",
    };
}

// Fonction pour additionner les crédits mineurs
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: "MinorCredits",
    };
}

// Exemple d'utilisation:
const major1: MajorCredits = { credits: 3, __brand: "MajorCredits" };
const major2: MajorCredits = { credits: 4, __brand: "MajorCredits" };
const minor1: MinorCredits = { credits: 1, __brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 2, __brand: "MinorCredits" };

console.log(sumMajorCredits(major1, major2)); // { credits: 7, __brand: "MajorCredits" }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 3, __brand: "MinorCredits" }
