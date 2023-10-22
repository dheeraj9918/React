export function filterinfo(searchInput, restaurants) {
    const filterinfo = restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filterinfo;
}