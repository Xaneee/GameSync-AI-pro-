use axum::{routing::post, Router, Json};
use std::net::SocketAddr;
use serde_json::json;

async fn process_payment(Json(payload): Json<serde_json::Value>) -> Json<serde_json::Value> {
    let user = payload["user"].as_str().unwrap();
    let amount = payload["amount"].as_u64().unwrap();

    Json(json!({ "status": "success", "message": format!("Payment of {} tokens processed for {}", amount, user) }))
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/payment/process", post(process_payment));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3001));
    println!("Backend running at http://{}", addr);
    axum::Server::bind(&addr).serve(app.into_make_service()).await.unwrap();
}
