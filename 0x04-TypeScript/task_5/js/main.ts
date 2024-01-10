type Brand<K, T> = K & { __brand: T };

interface MajorCredits {
	credits: Brand<number, "Major">;
}

interface MinorCredits {
	credits: Brand<number, "Minor">;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MinorCredits): MajorCredits {
	return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

function sumMinorCredits(subject1: MajorCredits, subject2: MinorCredits): MinorCredits {
	return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
