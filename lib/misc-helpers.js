/**
 * 
 * @param {*} habitatName 
 */
export function getHabitatBGClass(habitatName) {
	switch (habitatName) {
		case 'cave':
			return `bg_habitat_cave`
		case 'forest':
			return 'bg_habitat_forest'
		case 'grassland':
			return 'bg_habitat_grassland'
		case 'waters-edge':
			return 'bg_habitat_waters_edge'
		case 'sea':
			return 'bg_habitat_sea'
		case 'urban':
			return 'bg_habitat_urban'
		case 'rare':
			return 'bg_habitat_urban'
		case 'mountain':
			return 'bg_habitat_mountain'
		default:
			return 'bg_habitat_grassland'
	}
}
