#!/usr/bin/env python3
# Copyright (C) 2024 Checkmk GmbH - License: GNU General Public License v2
# This file is part of Checkmk (https://checkmk.com). It is subject to the terms and
# conditions defined in the file COPYING, which is part of this source code package.

from cmk.graphing.v1 import graphs, metrics, perfometers, Title

UNIT_PERCENTAGE = metrics.Unit(metrics.DecimalNotation("%"))
UNIT_TIME = metrics.Unit(metrics.TimeNotation())

metric_hop_32_pl = metrics.Metric(
    name="hop_32_pl",
    title=Title("Hop 32 packet loss"),
    unit=UNIT_PERCENTAGE,
    color=metrics.Color.BROWN,
)
metric_hop_32_rta = metrics.Metric(
    name="hop_32_rta",
    title=Title("Hop 32 round trip average"),
    unit=UNIT_TIME,
    color=metrics.Color.ORANGE,
)
metric_hop_32_rtmax = metrics.Metric(
    name="hop_32_rtmax",
    title=Title("Hop 32 round trip maximum"),
    unit=UNIT_TIME,
    color=metrics.Color.BLUE,
)
metric_hop_32_rtmin = metrics.Metric(
    name="hop_32_rtmin",
    title=Title("Hop 32 round trip minimum"),
    unit=UNIT_TIME,
    color=metrics.Color.GREEN,
)
metric_hop_32_rtstddev = metrics.Metric(
    name="hop_32_rtstddev",
    title=Title("Hop 32 round trip standard devation"),
    unit=UNIT_TIME,
    color=metrics.Color.PINK,
)

perfometer_hop_32_pl_hop_32_rta = perfometers.Bidirectional(
    name="hop_32_pl_hop_32_rta",
    left=perfometers.Perfometer(
        name="hop_32_pl",
        focus_range=perfometers.FocusRange(
            perfometers.Closed(0),
            perfometers.Closed(100.0),
        ),
        segments=["hop_32_pl"],
    ),
    right=perfometers.Perfometer(
        name="hop_32_rta",
        focus_range=perfometers.FocusRange(
            perfometers.Closed(0),
            perfometers.Open(1),
        ),
        segments=["hop_32_rta"],
    ),
)

graph_hop_32_round_trip_average = graphs.Graph(
    name="hop_32_round_trip_average",
    title=Title("Hop 32 round trip average"),
    simple_lines=[
        "hop_32_rtmax",
        "hop_32_rtmin",
        "hop_32_rta",
        "hop_32_rtstddev",
    ],
)

graph_hop_32_packet_loss = graphs.Graph(
    name="hop_32_packet_loss",
    title=Title("Hop 32 packet loss"),
    compound_lines=["hop_32_pl"],
)
