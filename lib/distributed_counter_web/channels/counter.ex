defmodule DistributedCounterWeb.Counter do
  use Phoenix.Channel

  def join("counter:" <> room, _message, socket) do
    {:ok, socket}
  end

  def handle_in("update", %{"body" => body}, socket) do
    broadcast! socket, "update", %{body: body}
    {:noreply, socket}
  end
end