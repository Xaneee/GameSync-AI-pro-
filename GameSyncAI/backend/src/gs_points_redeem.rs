use axum::{routing::post, Router, Json};
use std::net::SocketAddr;
use serde_json::json;

async fn redeem_gs_points(Json(payload): Json<serde_json::Value>) -> Json<serde_json::Value> {
    let user_id = payload["user_id"].as_str().unwrap();
    let points = payload["points"].as_u64().unwrap();

    Json(json!({ "status": "success", "message": format!("{} GS Points redeemed for {}", points, user_id) }))
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", post(redeem_gs_points));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3001));
    println!("Backend running at http://{}", addr);
    axum::Server::bind(&addr).serve(app.into_make_service()).await.unwrap();
}
