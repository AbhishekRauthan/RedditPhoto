export interface RedditData {
  data: {
    children: [
      Data
    ],
    dist: number
  }
}

export interface Data {
  data: {
    url_overridden_by_dest: string,
    title: string,
    ups: number,
    author: string,
    url: string
  }
}