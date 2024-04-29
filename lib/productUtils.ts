export const getFilterParams = ({
  c,
  s,
  p,
  r,
  pg,
  params,
}: {
  c?: string
  s?: string
  p?: string
  r?: string
  pg?: string
  params: { price?: string; rating?: string; page?: string; sort?: string }
}) => {
  if (p) params.price = p
  if (r) params.rating = r
  if (pg) params.page = pg
  if (s) params.sort = s
  return `?${new URLSearchParams(params).toString()}`
}
