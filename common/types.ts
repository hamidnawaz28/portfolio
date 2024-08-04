export interface WorkHistoryInterface {
    jobTitle: string
    company: string
    location: string
    from: string
    to: string
    summary: string
    responsibilities: string[],
    links: string[],
    stack: string[],
}

export interface WorkHistoryDetailsInterface {
    workHistory: WorkHistoryInterface
}
