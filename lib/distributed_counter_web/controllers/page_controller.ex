defmodule DistributedCounterWeb.PageController do
  use DistributedCounterWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
