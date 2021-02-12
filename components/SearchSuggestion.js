import PropTypes from 'prop-types'
import Fuse from 'fuse.js'

export default function SearchSuggestion({searchedTerm, potentialTerms}) {
  console.log(searchedTerm, potentialTerms)

	const fuse = new Fuse(potentialTerms, {
		includeScore: true,
	})

  const result = fuse.search(searchedTerm);
  const highestScoring = potentialTerms[result[0].item]
  console.log(highestScoring)
	return <div className="mt-1">Did you mean: {highestScoring}?</div>
}

SearchSuggestion.propTypes = {
	potentialTerms: PropTypes.array,
	searchTerm: PropTypes.string,
}
