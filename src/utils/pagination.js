
export default function pagination( length, list, currentPage ) {
    const POST_PER_PAGE = 6;
    const pages = Math.floor(length / POST_PER_PAGE);
    const startIndex = (currentPage - 1) * POST_PER_PAGE; 
    const finishIndex = startIndex + POST_PER_PAGE;

    const posts = list.slice(startIndex,finishIndex);

    return {
        pages,
        posts
    }

}
