const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const GOOGLE_CLIENT_ID = `972481507981-sslkemqpauvolk87bq4mg1efvk6v1huu.apps.googleusercontent.com`;
const GOOGLE_CLIENT_SECRET = `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`;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://127.0.0.1:3011/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      console.log(accessToken);

      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
