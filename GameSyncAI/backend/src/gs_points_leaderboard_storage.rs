use axum::{routing::get, Router, Json};
use std::net::SocketAddr;
use serde_json::json;

async fn get_leaderboard_storage() -> Json<serde_json::Value> {
    Json(json!([
        { "user": "ProGamer1", "gs_points": 7500 },
        { "user": "EliteSniper", "gs_points": 6700 },
        { "user": "SpeedRunner", "gs_points": 5400 }
    ]))
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/leaderboard/storage", get(get_leaderboard_storage));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3001));
    println!("Backend running at http://{}", addr);
    axum::Server::bind(&addr).serve(app.into_make_service()).await.unwrap();
}
