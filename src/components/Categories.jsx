import { plantList } from '../datas/plantList'
export default function Categories({ categories, activeCategory, setActiveCategory }) {


    return (
        <>
            <select
                name="categories"
                id="categories"
                onChange={(e) => setActiveCategory(e.target.value)}
                value={activeCategory}>
                <option value="">Veuillez saisir une categorie</option>
                {
                    categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))
                }
            </select>
            <button onClick={() => setCategory("")}>Renitialiser</button>
        </>
    )
}