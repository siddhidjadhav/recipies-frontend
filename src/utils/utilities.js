export async function fetchRecipes() {
    try {
        const response = await fetch(`${BASE_URL}/recipies/`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const recipes = await response.json();
        return recipes;
    } catch (error) {
        console.error('Failed to fetch recipes:', error);
        throw error;
    }
}

export async function deleteAllRecipes() {
  try {
      const response = await fetch(`${BASE_URL}/recipes/delete/`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      return await response.json();
  } catch (error) {
      console.error('Failed to delete all recipes:', error);
      throw error;
  }
}

export async function getRecipeById(id) {
  try {
      const response = await fetch(`${BASE_URL}/recipes/${id}/`);
      
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      
      return await response.json();
  } catch (error) {
      console.error(`Failed to fetch recipe with ID ${id}:`, error);
      throw error;
  }
}


export const BASE_URL = "http://3.139.65.125:8000/api"
