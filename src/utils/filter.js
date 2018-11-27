export const deleteTargetFilter = (state, key, target) => state.filter(obj => obj[key] !== target);

export const findTargetFilter = (state, key, target) => state.filter(obj => String(obj[key]) === target);
