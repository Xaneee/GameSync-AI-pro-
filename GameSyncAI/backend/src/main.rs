use axum::{routing::get, Router, Json};
use std::net::SocketAddr;
use serde_json::json;

async fn get_user_analytics() -> Json<serde_json::Value> {
    Json(json!({ "total_clips_created": 52, "gs_points_earned": 3400 }))
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(|| async { "🚀 GameSync AI Backend Running!" }))
        .route("/user/analytics", get(get_user_analytics));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3001));
    println!("Backend running at http://{}", addr);
    axum::Server::bind(&addr).serve(app.into_make_service()).await.unwrap();
}
