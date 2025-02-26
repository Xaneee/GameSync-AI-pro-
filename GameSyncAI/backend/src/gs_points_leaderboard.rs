use axum::{routing::get, Router, Json};
use std::net::SocketAddr;
use serde_json::json;

async fn get_leaderboard() -> Json<serde_json::Value> {
    Json(json!([
        { "user": "Player1", "gs_points": 5500 },
        { "user": "Player2", "gs_points": 4300 },
        { "user": "Player3", "gs_points": 3800 }
    ]))
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/leaderboard", get(get_leaderboard));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3001));
    println!("Backend running at http://{}", addr);
    axum::Server::bind(&addr).serve(app.into_make_service()).await.unwrap();
}
