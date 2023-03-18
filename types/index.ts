export interface Member {
    login: string,
    id: number,
    avatar_url: string,
    url: string
}

export interface MemberDetail {
    //https://api.github.com/users/brauliodiez
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company: string,
    location: string,
    bio: string,
}

export interface MembersApiResponse {
    members: Member[]
}
