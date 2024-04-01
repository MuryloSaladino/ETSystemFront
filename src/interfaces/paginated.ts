export interface IPaginated<Content> {
    page: number;
    totalPages: number;
    paginatedData: Content[]
}