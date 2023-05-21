/**
 * A single exercise created by the user.
 *
 * @export
 * @interface Exercise
 */
export interface Exercise {
    id: string;
    name: string;
    note: string;
    type: ExerciseType;
    ownerId: string;
}

/** The types of possible exercise classifications.
 *  Used by the @Exercise
 */
export type ExerciseType = 'weight' | 'timed' | 'duration' | 'distance' | 'activity';
