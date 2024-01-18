-- CREATE OR REPLACE FUNCTION public.add_favorite(email varchar, location varchar)
-- RETURNS text AS $$
-- BEGIN
--   UPDATE public.users
--   SET perfer_location = array_append((SELECT perfer_location FROM public.users WHERE users.email = add_favorite.email), add_favorite.location)
--   WHERE users.email = add_favorite.email;

--   RETURN 'Successfully added favorite location';
-- END;
-- $$ LANGUAGE plpgsql;



-- CREATE OR REPLACE FUNCTION public.get_favorite(email text)
-- RETURNS text[] AS $$
-- DECLARE
--   fav_locations text[];
-- BEGIN
--   -- Fetch the favorite locations for the user with the specified email
--   SELECT perfer_location INTO fav_locations
--   FROM public.users
--   WHERE users.email = get_favorite.email;

--   -- Return the array of favorite locations
--   RETURN fav_locations;
-- END;
-- $$ LANGUAGE plpgsql;





-- create type public.token  as (
-- email TEXT,
-- password text
-- );
--  CREATE TYPE  public.login_response as (
--     token public.token,
--     user_info json
--  )



-- create OR REPLACE function public.login(
--   email text,
--   password text
-- ) returns public.login_response as $$
-- declare
--   account public.users;

-- begin
--   select a.* into account
--     from public.users as a
--     where a.email = login.email;

--   if account.password = crypt(password, account.password_hash) then
--     return ROW(

--     )::my_public_schema.jwt_token;
--   else
--     return null;
--   end if;
-- end;
-- $$ language plpgsql strict security definer;