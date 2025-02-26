use axum::{routing::get, Router, Json};
use std::net::SocketAddr;
use serde_json::json;

async fn detect_fraud() -> Json<serde_json::Value> {
    Json(json!([
        { "user": "Player1", "fraud_risk": "Low" },
        { "user": "Player2", "fraud_risk": "High" }
    ]))
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/fraud/detection", get(detect_fraud));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3001));
    println!("Backend running at http://{}", addr);
    axum::Server::bind(&addr).serve(app.into_make_service()).await.unwrap();
}
