type HeadersWithJwt = {
  authorization?: string;
};

export function validateJwt(req: Request) {
  const headers = req.headers as HeadersWithJwt;

  if (!headers.authorization) return false;

  // TODO: normal logic JWT

  return true;
}
