use axum::{routing::get, Router, Json};
use std::net::SocketAddr;
use serde_json::json;

async fn get_notifications() -> Json<serde_json::Value> {
    Json(json!([
        { "user": "Player1", "message": "New GS Points earned!" },
        { "user": "Player2", "message": "Leaderboard rank increased!" }
    ]))
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/notifications", get(get_notifications));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3001));
    println!("Backend running at http://{}", addr);
    axum::Server::bind(&addr).serve(app.into_make_service()).await.unwrap();
}
