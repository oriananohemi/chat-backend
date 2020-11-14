const config = {
  dbUrl:
    process.env.DB_URL ||
    "mongodb+srv://db_user_pnode:alexander@cluster0.w5af8.mongodb.net/chat_telegram_platzi?retryWrites=true&w=majority",
  port: process.env.PORT || 3200,
  host: process.env.HOST || "http://localhost",
  publicRoute: process.env.PUBLIC_ROUTE || "app",
};

module.exports = config;
